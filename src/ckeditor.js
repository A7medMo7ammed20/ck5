/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';

import { Bold, Code, Italic, Strikethrough, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import { Essentials } from '@ckeditor/ckeditor5-essentials';

import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js'; 	

import { AutoLink, Link, LinkImage } from '@ckeditor/ckeditor5-link';
import {
	
	ImageInsert,
	

} from '@ckeditor/ckeditor5-image';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js';

import { Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar } from '@ckeditor/ckeditor5-table';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import { Highlight } from '@ckeditor/ckeditor5-highlight';

import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	FontBackgroundColor,
	FontFamily,
	Alignment,
	ImageInsert,
	Autoformat,
	BlockQuote,
	Bold,
	CloudServices,
	Essentials,
	FontColor,
	FontSize,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	AutoLink,
	LinkImage,
	List,
	ListProperties,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	SpecialCharacters,
	SpecialCharactersEssentials,
	Subscript,
	Superscript,
	Table,
	TableToolbar,
	TextTransformation,
	Underline,
	Highlight,
	FindAndReplace,
	Code,
	Strikethrough,
	TableCellProperties,
	TableCaption,
	TableColumnResize,
	TableProperties,
	TodoList,
];

// Editor configuration.
Editor.defaultConfig =  {

	
    // extraPlugins: [this.customUploadAdapterPlugin()],
    // extraPlugins: [this.customUploadAdapterPlugin.bind(this.Editor)],
    // other CKEditor config

    toolbar: {
      items: [
        //'exportPDF','exportWord', '|',
        "findAndReplace",
        "selectAll",
        "|",
        "heading",
        "|",
        "bold",
        "italic",
        "strikethrough",
        "underline",
        "code",
        "subscript",
        "superscript",
        "removeFormat",
        "|",
        "bulletedList",
        "numberedList",
        "todoList",
        "|",
        "outdent",
        "indent",
        "|",
        "undo",
        "redo",
        //'-',
        "fontSize",
        "fontFamily",
        "fontColor",
        "fontBackgroundColor",
        "highlight",
        "|",
        "alignment",
        "|",
        "link",
       
        "imageInsert",
        "blockQuote",
        "insertTable",
        "mediaEmbed",
        "codeBlock",
        "htmlEmbed",
        "|",
        "specialCharacters",
        "horizontalLine",
        "pageBreak",
        "|",
        "textPartLanguage",
        "|",
        "sourceEditing",
      ],
      shouldNotGroupWhenFull: false,
    },

    //   placeholder: {
    //     header: 'Type header...',
    //     content: 'Type content...',
    //     leftSide: 'Type left-side...',
    //     rightSide: 'Type right-side...'
    // },

    ui: {
      poweredBy: {
        position: "inside",
        side: "left",
        label: "",
      },
    },
	table: {
		contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' , 'TableUtils' ]
	}, 

    toolbarLocation: "bottom",
    // Changing the language of the interface requires loading the language file using the <script> tag.
    // language: 'ar',
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true,
      },
    },
    image: {
      toolbar: [
        "imageTextAlternative",
        "toggleImageCaption",
        "imageStyle:inline",
        "imageStyle:block",
        "imageStyle:side",
        "linkImage",
      ],
    },
    // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html#configuration
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "Heading 5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "Heading 6",
          class: "ck-heading_heading6",
        },
      ],
    },
    // https://ckeditor.com/docs/ckeditor5/latest/features/editor-placeholder.html#using-the-editor-configuration

    // https://ckeditor.com/docs/ckeditor5/latest/features/font.html#configuring-the-font-family-feature
    fontFamily: {
      options: [
        "default",
        "Arial, Helvetica, sans-serif",
        "Courier New, Courier, monospace",
        "Georgia, serif",
        "Lucida Sans Unicode, Lucida Grande, sans-serif",
        "Tahoma, Geneva, sans-serif",
        "Times New Roman, Times, serif",
        "Trebuchet MS, Helvetica, sans-serif",
        "Verdana, Geneva, sans-serif",
      ],
      supportAllValues: true,
    },
    // https://ckeditor.com/docs/ckeditor5/latest/features/font.html#configuring-the-font-size-feature
    fontSize: {
      options: [10, 12, 14, "default", 18, 20, 22],
      supportAllValues: true,
    },
    // Be careful with the setting below. It instructs CKEditor to accept ALL HTML markup.
    // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html#enabling-all-html-features
    htmlSupport: {
      allow: [
        {
          name: /.*/,
          attributes: true,
          classes: true,
          styles: true,
        },
      ],
    },
    // Be careful with enabling previews
    // https://ckeditor.com/docs/ckeditor5/latest/features/html-embed.html#content-previews
    htmlEmbed: {
      showPreviews: true,
    },
    // https://ckeditor.com/docs/ckeditor5/latest/features/link.html#custom-link-attributes-decorators
    link: {
      decorators: {
        addTargetToExternalLinks: true,
        defaultProtocol: "https://",
        toggleDownloadable: {
          mode: "manual",
          label: "Downloadable",
          attributes: {
            download: "file",
          },
        },
      },
    },
    // https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html#configuration
    mention: {
      feeds: [
        {
          marker: "@",
          feed: [
            "@apple",
            "@bears",
            "@brownie",
            "@cake",
            "@cake",
            "@candy",
            "@canes",
            "@chocolate",
            "@cookie",
            "@cotton",
            "@cream",
            "@cupcake",
            "@danish",
            "@donut",
            "@dragée",
            "@fruitcake",
            "@gingerbread",
            "@gummi",
            "@ice",
            "@jelly-o",
            "@liquorice",
            "@macaroon",
            "@marzipan",
            "@oat",
            "@pie",
            "@plum",
            "@pudding",
            "@sesame",
            "@snaps",
            "@soufflé",
            "@sugar",
            "@sweet",
            "@topping",
            "@wafer",
          ],
          minimumCharacters: 1,
        },
      ],
    },
    // simpleUpload: {
    //         // The URL that the images are uploaded to.
    //         uploadUrl: 'http://example.com',

    //         // Enable the XMLHttpRequest.withCredentials property.
    //         withCredentials: true,

    //         // Headers sent along with the XMLHttpRequest to the upload server.
    //         headers: {
    //             'X-CSRF-TOKEN': 'CSRF-Token',
    //             Authorization: 'Bearer <JSON Web Token>'
    //         }
    //     }
    highlight: {
      options: [
        {
          model: "greenMarker",
          class: "marker-green",
          title: "Green marker",
          color: "var(--ck-highlight-marker-green)",
          type: "marker",
        },
        {
          model: "redPen",
          class: "pen-red",
          title: "Red pen",
          color: "var(--ck-highlight-pen-red)",
          type: "pen",
        },
      ],
    },
  };


export default Editor;

// class FirebaseUploadAdapter {
// 	constructor(loader) {
// 	  // The file loader instance to use during the upload.
// 	  this.loader = loader;
// 	  // Initialize uploadTask to null
// 	  this.uploadTask = null;
// 	}
  
// 	// Starts the upload process.
// 	upload() {
// 	  return this.loader.file
// 		.then(file => new Promise((resolve, reject) => {
// 		  const storageRef = firebase.storage().ref();
// 		  // Assign the upload task to this.uploadTask so it can be referenced later.
// 		  this.uploadTask = storageRef.child('images/' + file.name).put(file);
  
// 		  this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
// 			(snapshot) => {
// 			  // Upload progress handling can go here, if needed.
// 			},
// 			(error) => {
// 			  reject(error);
// 			},
// 			() => {
// 			  this.uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
// 				resolve({
// 				  default: downloadURL
// 				});
// 			  });
// 			}
// 		  );
// 		}));
// 	}
  
// 	// Aborts the upload process.
// 	abort() {
// 	  // Check if the upload task exists and is running, then cancel it.
// 	  if (this.uploadTask && this.uploadTask.snapshot.state === firebase.storage.TaskState.RUNNING) {
// 		this.uploadTask.cancel();
// 	  }
// 	}
//   }
  
  



//   function CustomUploadAdapterPlugin(editor) {
// 	editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
// 	  // Configure the URL to the upload script in your back-end here!
// 	  return new FirebaseUploadAdapter(loader);
// 	};
//   }


import mongoose from 'mongoose';


//schema to save summary
const WikipediaSchema = new mongoose.Schema({
    ns: {
         type:Number,
         default:undefined
    },
    index: { 
        type:Number,
        default:undefined
    },
    type: String,
    title: String,
    displaytitle: String,
    namespace: { id: Number, text: String },
    wikibase_item: String,
    titles: { canonical: String, normalized: String, display: String },
    pageid: Number,
    thumbnail: {
      source: String,
      width: Number,
      height: Number
    },
    originalimage: {
      source: String,
      width: Number,
      height: Number
    },
    lang: String,
    dir: String,
    revision: String,
    tid: String,
    timestamp: String,
    description: String,
    description_source: String,
    content_urls: {
      desktop: {
        page: String,
        revisions: String,
        edit: String,
        talk: String
      },
      mobile: {
        page: String,
        revisions: String,
        edit: String,
        talk: String
      }
    },
    extract: String,
    extract_html: String,
    normalizedtitle: {
        type:String,
        default:undefined
    },
    coordinates: {
      lat: {
        type:Number,
        default:undefined},

      lon:{
         type:Number,
        default:undefined
      }
    }
});

const WikipediaEntries = mongoose.model('WikipediaEntry', WikipediaSchema);

export {WikipediaEntries}
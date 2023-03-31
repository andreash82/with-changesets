import {defineConfig} from "vite";
import react from "@vitejs/plugin-react"
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import  Icons  from "unplugin-icons/vite";


export default defineConfig({
 base:"./",
 clearScreen:false,
 plugins:[
   react({fastRefresh:true}),
   Icons({
    compiler:"jsx",
    jsx:"react",
    customCollections:{
     "examplecollection":FileSystemIconLoader("node_modules/@example/icons/examplecollection")
    }
   })
 ],
  build:{
   target:["es2020"],
    reportCompressedSize:true,
    sourcemap:true,
    minify:true,
    rollupOptions:{

    }
  }
})
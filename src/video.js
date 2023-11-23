const {exec} = require('child_process');
const { stderr, stdout } = require('process');

function video(delay,duration,filename){
    exec(`sleep ${delay} && ffmpeg -f v4l2 -i /dev/video0 -t ${duration} ${filename}`,(err,stdout,stderr)=>{
        if (err) {
            console.error(`Error: ${error.message}`);
            return;
          }
          if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
          }
          console.log(`${filename} captured sucessfully`);
    }
)}


module.exports=video;
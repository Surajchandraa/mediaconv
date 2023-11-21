const {exec}= require('child_process');

function click(l,w,delay,img_name){
    exec(`sleep ${delay} && ffmpeg -f v4l2 -video_size ${l}x${w}  -i /dev/video0 -frames 1 ${img_name}`,(error,stdout,stderr)=>{
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
          }
          if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
          }
          console.log(`${img_name} captured sucessfully`);
    })
}
module.exports=click
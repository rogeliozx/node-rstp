const Stream = require('./node-rtsp-stream');
const Recorder = require('node-rtsp-recorder').Recorder;
const streamUrl =
  'rtsp://rogelio:rogelio123@192.168.0.190:554/cam/realmonitor?channel=2&subtype=0';

stream = new Stream({
  name: 'foscam_stream',
  streamUrl: streamUrl,
  wsPort: 9999,
  width: 1920,
  height: 720
});
const rec = new Recorder({
  url:
    'rtsp://rogelio:rogelio123@192.168.0.190:554/cam/realmonitor?channel=2&subtype=0',
  folder: './capture',
  name: 'cam2',
  type: 'image',
  directoryPathFormat: 'puto',
  fileNameFormat: 'joto'
});

rec.captureImage(() => {
  console.log('Image Captured');
});

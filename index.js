const Stream = require('./node-rtsp-stream');

stream = new Stream({
  name: 'foscam_stream',
  streamUrl: 'rtsp://rogelio:rogelio123@192.168.0.190:554/cam/realmonitor?channel=2&subtype=0',
  wsPort: 9999,
  width: 1920,
  height: 1080
});

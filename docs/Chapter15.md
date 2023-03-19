# [Zero to Mastery] Complete Angular Developer in 2023 [ENG, 2022]

<br/>

## 15 Processing Videos with FFmpeg

<br/>

### 001 Understanding FFmpeg

<br/>

### 002 Installing FFmpeg

```
$ npm install @ffmpeg/ffmpeg @ffmpeg/core
$ npm install @types/node
```

<br/>

### 003 Custom Asset Paths

http://localhost:4200/node_modules/@ffmpeg/core/dist/ffmpeg-core.js

<br/>

![Application](/img/pic-m15-p01.png?raw=true)

<br/>

### 004 Adding support for SharedArrayBuffer

<br/>

![Application](/img/pic-m15-p02.png?raw=true)

<br/>

### 005 Loading FFmpeg with a Service

```
$ ng generate service services/ffmpeg
```

<br/>

### 006 Initializing FFMPeg

<br/>

![Application](/img/pic-m15-p03.png?raw=true)

<br/>

### 007 Saving Files in Memory

<br/>

### 008 Generating a Screenshot

<br/>

![Application](/img/pic-m15-p04.png?raw=true)

<br/>

### 009 Generating Multiple Screenshots

<br/>

### 010 Creating Screenshot URLs

<br/>

### 011 Bypassing Sanitization with Pipes

```
$ ng generate pipe video/pipes/safeURL
```

<br/>

![Application](/img/pic-m15-p05.png?raw=true)

<br/>

### 012 Adding Feedback

<br/>

![Application](/img/pic-m15-p06.png?raw=true)

<br/>

### 013 Selecting a Screenshot

<br/>

![Application](/img/pic-m15-p07.png?raw=true)

<br/>

### 014 Updating the Firebase Storage Rules

Storage -> Rules

```js
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null &&
      (request.resource.contentType == 'video/mp4' || request.resource.contentType == 'image/png') &&
      request.resource.size < 25 * 1000 * 1000;
      allow delete: if request.auth != null;
    }
  }
}
```

<br/>

### 015 Uploading a Blob

<br/>

![Application](/img/pic-m15-p08.png?raw=true)

<br/>

### 016 Recalculating the Upload Progress

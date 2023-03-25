# [Zero to Mastery] Complete Angular Developer in 2023 [ENG, 2022]

<br/>

[Deployed Project](//complete-angular-developer.jsdev.org)

<br/>

```
$ node -v
v18.14.0
```

<br/>

```
$ yarn -v
4.0.0-rc.38
```

<br/>

```
$ npm -v
9.4.1
```

```
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 15.1.3
Node: 18.13.0
Package Manager: npm 9.2.0
OS: linux x64

Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1501.3 (cli-only)
@angular-devkit/core         15.1.3 (cli-only)
@angular-devkit/schematics   15.1.3 (cli-only)
@schematics/angular          15.1.3 (cli-only)

```

<br/>

## How to Run

```
$ cd app/clips
$ npm install
$ npm start
```

http://localhost:4200/

<br/>

### Additional setup

Cloud Firestore -> Firestore Database -> Rules

<br/>

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth.uid == resource.data.uid;
      allow create: if request.auth.uid != null;
      allow delete: if request.auth.uid == resource.data.uid;
    }
  }
}
```

<br/>

**Disable for debug**

```js
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
       allow create, read, write, delete;
    }
  }
}
```

<br/>

Cloud Firestore -> Storage -> Rules

```js
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null &&
                    (request.resource.contentType == 'video/mp4' ||
                    request.resource.contentType == 'image/png'
                    ) &&
                  request.resource.size < 25 * 1000 * 1000;
      allow delete: if request.auth != null;
    }
  }
}
```

<br/>

**Disable for debug**

```js
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow create, read, write, delete;
    }
  }
}
```

<br/>

```
// install gcloud, then
$ gcloud auth login
$ gsutil cors set cors.json gs://complete-angular-developer.appspot.com
```

<br/>

**Twitch clip downloader:**  
https://clipsey.com/

<br/>

## Development

### [06 Component Design](./docs/Chapter06.md)

### [07 Reactive Forms](./docs/Chapter07.md)

### [08 Template Forms](./docs/Chapter08.md)

### 09 Intro to RxJS

### [10 Authentication](./docs/Chapter10.md)

### [11 Custom Validators](./docs/Chapter11.md)

### [12 Routing](./docs/Chapter12.md)

### [13 Uploading Files](./docs/Chapter13.md)

### 14 WebAssembly & Rust

### [15 Processing Videos with FFmpeg](./docs/Chapter15.md)

### [16 Playing Videos](./docs/Chapter16.md)

### [17 Deployment](./docs/Chapter17.md)

### [18 Project Testing](./docs/Chapter18.md)

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>

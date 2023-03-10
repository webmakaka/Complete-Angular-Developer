# [Zero to Mastery] Complete Angular Developer in 2023 [ENG, 2022]

<br/>

## 13 Uploading Files

<br/>

### 001 Understanding File Uploads

<br/>

### 002 Blocking Events with Directives

```
$ ng generate directive shared/directives/EventBlocker
```

<br/>

### 003 Handling Drag and Drop Events

<br/>

### 004 Handling Files

<br/>

### 005 Multi Step Form

<br/>

### 006 The Upload Form

<br/>

### 007 Uploading Files with Firebase

```
$ npm install uuid @types/uuid
```

<br/>

![Application](/img/pic-m13-p01.png?raw=true)

<br/>

![Application](/img/pic-m13-p02.png?raw=true)

<br/>

![Application](/img/pic-m13-p03.png?raw=true)

<br/>

### 008 Firebase Rules and Validation

Storage -> Rules

```js
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null &&
      request.resource.contentType == 'video/mp4' &&
      request.resource.size < 10 * 1000 * 1000;
    }
  }
}
```

<br/>

### 009 Adding an Alert Component

<br/>

![Application](/img/pic-m13-p04.png?raw=true)

<br/>

### 010 Upload Progress Observable

<br/>

![Application](/img/pic-m13-p05.png?raw=true)

<br/>

### 011 Handling Errors and Successful Uploads

<br/>

![Application](/img/pic-m13-p06.png?raw=true)

<br/>

### 012 Storing the File Data

<br/>

### 013 Adding the File Data to the Database

```
$ ng generate service services/clip
```

<br/>

![Application](/img/pic-m13-p07.png?raw=true)

<br/>

### 014 Firebase References and Snapshots

<br/>

### 015 Disabling Forms

<br/>

### 016 Fallback Upload

<br/>

### 017 Canceling Uploads

<br/>

### 018 Redirection after Upload

<br/>

![Application](/img/pic-m13-p08.png?raw=true)

<br/>

### 019 Storing a Timestamp

<br/>

![Application](/img/pic-m13-p09.png?raw=true)

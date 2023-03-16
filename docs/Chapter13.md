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

<br/>

### 020 Querying the Database

<br/>

### 021 Storing the List of Clips

<br/>

### 022 Displaying the List of Clips

<br/>

![Application](/img/pic-m13-p10.png?raw=true)

<br/>

### 023 Preparing the Form

```
$ ng generate component video/edit
```

<br/>

![Application](/img/pic-m13-p11.png?raw=true)

<br/>

### 024 Passing on the Clip Data

<br/>

### 025 Binding the Edit Form

<br/>

### 026 Updating Clips

<br/>

![Application](/img/pic-m13-p12.png?raw=true)

<br/>

### 027 Updating the List of Clips

<br/>

### 028 Deleting a Clip from the StorageDatabase

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
      allow delete: if request.auth != null;
    }
  }
}
```

<br/>

### 029 Sorting Clips with Behavior Subjects

```
// OK!
ERROR FirebaseError: The query requires an index. You can create it here: https://console.firebase.google.com/v1/r/project/complete-angular-developer/firestore/indexes
```

<br/>

### 030 Composite Indexes

Firestore Database -> Indexes -> Create index

<br/>

![Application](/img/pic-m13-p13.png?raw=true)

<br/>

![Application](/img/pic-m13-p14.png?raw=true)

<br/>

Wait for a few minutes

<br/>

![Application](/img/pic-m13-p15.png?raw=true)

<br/>

**Upload new videos!**

<br/>

![Application](/img/pic-m13-p16.gif?raw=true)

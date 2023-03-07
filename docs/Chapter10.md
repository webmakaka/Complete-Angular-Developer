# [Zero to Mastery] Complete Angular Developer in 2023 [ENG, 2022]

<br/>

## 10 Authentication

<br/>

### 001 Setting up Firebase

https://console.firebase.google.com/

<br/>

--> Create a Project

<br/>

![Application](/img/pic-m10-p01.png?raw=true)

<br/>

![Application](/img/pic-m10-p02.png?raw=true)

<br/>

![Application](/img/pic-m10-p03.png?raw=true)

<br/>

![Application](/img/pic-m10-p04.png?raw=true)

<br/>

![Application](/img/pic-m10-p05.png?raw=true)

<br/>

### 002 Reviewing the Rules

<br/>

### 003 Installing AngularFire

```
$ ng add @angular/fire
```

What features would you like to setup? [do not select anything]

<br/>

### 004 Importing AngularFire

<br/>

![Application](/img/pic-m10-p08.png?raw=true)

<br/>

![Application](/img/pic-m10-p09.png?raw=true)

<br/>

![Application](/img/pic-m10-p10.png?raw=true)

<br/>

```
$ ng generate environments
```

<br/>

### 005 User Registration

Authentication

<br/>

![Application](/img/pic-m10-p11.png?raw=true)

<br/>

![Application](/img/pic-m10-p12.png?raw=true)

<br/>

![Application](/img/pic-m10-p13.png?raw=true)

<br/>

![Application](/img/pic-m10-p14.png?raw=true)

<br/>

[AngularFire-Authentication](https://github.com/angular/angularfire/blob/master/docs/auth/getting-started.md)

<br/>

### 006 Handling the Response

<br/>

![Application](/img/pic-m10-p15.png?raw=true)

<br/>

![Application](/img/pic-m10-p16.png?raw=true)

<br/>

### 007 Buckets, Collections, and Documents

<br/>

### 008 Storing User Data

workaround

add

```
"skipLibCheck": true,
```

to tsconfig.json

<br/>

![Application](/img/pic-m10-p17.png?raw=true)

<br/>

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.time > timestamp.date(2020,9,10);
    }
  }
}
```

<br/>

![Application](/img/pic-m10-p18.png?raw=true)

<br/>

### 008 Storing User Data

<br/>

```
$ ng generate service services/auth
```

<br/>

### 009 Refactoring to a Service

<br/>

### 010 Interfaces vs. Classes

<br/>

### 011 Collection Types

<br/>

### 012 Connecting the User with their Data

<br/>

### 013 Database Rules

<br/>

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth.uid != null;
    }
  }
}
```

<br/>

### 014 Understanding Authentication

<br/>

### 015 Authentication after Registration

from firebase delete created users and documents

<br/>

### 016 The User Observable

<br/>

### 017 The Async Pipe

<br/>

![Application](/img/pic-m10-p19.png?raw=true)

<br/>

### 018 Initializing Firebase First

<br/>

### 019 Setting up the Login

<br/>

![Application](/img/pic-m10-p20.png?raw=true)

<br/>

![Application](/img/pic-m10-p21.png?raw=true)

<br/>

![Application](/img/pic-m10-p22.png?raw=true)

<br/>

### 020 Destroying the Modal

<br/>

### 021 The Delay Operator

<br/>

### 022 Signing Out

<br/>

### 023 Sidebar JSON Web Tokens

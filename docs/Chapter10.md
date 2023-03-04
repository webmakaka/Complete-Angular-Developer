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

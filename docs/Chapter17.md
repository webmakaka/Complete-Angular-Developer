# [Zero to Mastery] Complete Angular Developer in 2023 [ENG, 2022]

<br/>

## 17 Deployment

<br/>

### 001 Production Budgets

<br/>

### 002 Modifying Firebase Rules

Cloud Firestore -> Firestore Database -> Rules

<br/>

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth.uid == resource.data.uid;
      allow create: if request.auth.id != null;
      allow delete: if request.auth.id != resource.data.uid;
    }
  }
}
```

<br/>

### 003 Deploying an App with Vercel

vercel.com

<br/>

![Application](/img/pic-m17-p01.png?raw=true)

<br/>

![Application](/img/pic-m17-p02.png?raw=true)

<br/>

![Application](/img/pic-m17-p03.png?raw=true)

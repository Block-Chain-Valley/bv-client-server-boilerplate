<div align="center">
  <h2>📔 Client-Server-Boilerplate 📔</h2>
  <img width="300px" src="docs/logo.png" align="center">
  <p><br/></p>
  <strong>Nx Client-Server 모노레포 보일러플레이트</strong>
  <p>본 레포지토리의 저작권은 블록체인 밸리 개발팀에게 있습니다.</p>
</div>

<br/>

<div align="center">
    <h3>Tech Stack</h3>
    <br/>
    <div>
        <strong><p>Common</p></strong>  
        <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
        <img src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white"/>
        <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"/>
        <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"/>
    </div>
    <br/>
    <div>
        <strong><p>Repository & Styling</p></strong>
        <img src="https://img.shields.io/badge/workspace-143157?style=for-the-badge&logo=NX&logoColor=white"/>
        <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white">
        <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"/>
    </div>
    <br/>
    <div>
        <strong><p>Client</p></strong>
        <img src="https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge"/>
        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
        <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
    </div>
    <br/>
    <div>
        <strong><p>Server</p></strong>
        <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white"/>
        <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
        <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>
    </div>
</div>

<br/>
<br/>
<br/>

## 주요 명령어

### 설치

```
git clone https://github.com/Block-Chain-Valley/bv-client-server-boilerplate.git
```

### 시작

**최초 1회 시작 시 (데이터베이스 마이그레이션 필요)**

```
docker-compose up -d
yarn db-migrate:local
yarn start:all
```

**이후**

```
yarn start:all
```

### Lint & Test

```
# Lint
yarn lint:all

# Test
yarn test:all
```

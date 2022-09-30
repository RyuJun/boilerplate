# 디렉토리 구조

<aside>
🧐 `src` 하위 디렉토리 구조 입니다.

</aside>

## **전체 구조**

### CSR **(CRA, vite, webpack)**

```
src
├── App.tsx
├── Routes.tsx
├── assets
├── components
│   ├── Post
│   │   ├── Post.constants.ts
│   │   ├── Post.styles.ts
│   │   ├── Post.hooks.tsx
│   │   ├── Post.tsx
│   │   ├── Post.test.tsx
│   │   └── Post.types.ts
│   └── Posts
│       ├── Posts.constants.ts
│       ├── Posts.styles.ts
│       ├── Posts.hooks.ts
│       ├── Posts.tsx
│       ├── Posts.test.tsx
│       └── Posts.types.ts
├── hooks
├── index.tsx
├── locales
│   ├── en
│   │   └── common.json
│   ├── i18n.ts
│   └── ko
│       └── common.json
├── pages
│   └── index.tsx
├── react-app-env.d.ts
├── shared
│   ├── README.md
│   ├── apis
│   │   ├── apiBase.ts
│   │   ├── exampleApi.ts
│   │   └── queryKeys
│   │       └── example.ts
│   ├── configs
│   │   ├── queryClient.ts
│   │   └── storage.ts
│   ├── constants /
│   │   ├── common.constants.ts
│   │   └── pages
│   │       └── index.ts
│   ├── lib
│   │   ├── functions
│   │   └── variables
│   ├── styles
│   │   ├── font.ts
│   │   ├── global.ts
│   │   ├── index.ts
│   │   └── media-query.ts
│   ├── types
│   │   └── common.types.ts
│   └── utils
└── stores
    └── useExampleStore.ts
```

### **Next.js**

<aside>
🧐 `SSR`을 위한 `Next.js` 환경에서는 위 `CSR`구조와 거의 비슷합니다. 
`Routes.tsx`가 사라지고, `pages` 폴더 하위 폴더기반으로 라우팅이 동작합니다.

</aside>

```
src
├── assets
├── components
│   ├── Post
│   │   ├── Post.constants.ts
│   │   ├── Post.styles.ts
│   │   ├── Post.hooks.ts
│   │   ├── Post.tsx
│   │   ├── Post.test.tsx
│   │   └── Post.types.ts
│   ├── Posts
│   │   ├── Posts.constants.ts
│   │   ├── Posts.styles.ts
│   │   ├── Posts.hooks.ts
│   │   ├── Posts.tsx
│   │   ├── Posts.test.tsx
│   │   └── Posts.types.ts
│   └── README.md
├── hooks
├── locales
│   ├── en
│   │   └── common.json
│   ├── i18n.ts
│   └── ko
│       └── common.json
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── shared
│   ├── README.md
│   ├── apis
│   │   ├── apiBase.ts
│   │   ├── exampleApi.ts
│   │   └── queryKeys
│   │       └── example.ts
│   ├── configs
│   │   ├── queryClient.ts
│   │   └── storage.ts
│   ├── constants
│   │   ├── common.constants.ts
│   │   └── pages
│   │       └── index.ts
│   ├── lib
│   │   ├── functions
│   │   └── variables
│   ├── styles
│   │   ├── font.ts
│   │   ├── global.ts
│   │   ├── index.ts
│   │   └── media-query.ts
│   ├── types
│   │   └── common.types.ts
│   └── utils
└── stores
    └── useExampleStore.ts
```

## **components**

<aside>
🧐 프로젝트 `component`의 집합

</aside>

```
components
├── Post
│   ├── Post.constants.ts
│   ├── Post.styles.ts
│   ├── Post.hooks.ts
│   ├── Post.tsx
│   └── Post.types.ts
├── Posts
│   ├── Posts.constants.ts
│   ├── Posts.styles.ts
│   ├── Posts.hooks.ts
│   ├── Posts.tsx
│   └── Posts.types.ts
└── README.md
```

- [name].constants.ts
    
    해당 컴포넌트에서 사용하는 `constants` 들이 정의되어있습니다.
    
    ```tsx
    import { IPost } from '@/components/post/post.types';
    
    export const INITIAL_POST_DATA:IPost = {
      body: null,
      id: null,
      title: null,
      userId: null,
    };
    ```
    
- [name].types.ts
    
    해당 컴포넌트에서 사용하는 `type` 들이 정의되어있습니다.
    
    ```tsx
    export interface IPost {
      body: string;
      id?: number;
      title: string;
      userId?: number;
    }
    ```
    
- [name].hook.ts
    
    해당 컴포넌트에서 사용하는 `custom hook` 들이 정의되어있습니다. `react-query`를 사용할 때, 
    해당 파일에서 `useQuery hook`을 한번 더 감싸서 사용합니다.
    
    ```tsx
    import { IPost } from '../Post/Post.types';
    import QUERY_KEYS from '@/shared/apis/queryKeys/example';
    import { exampleApi } from '@/shared/apis/exampleApi';
    import { useQuery } from 'react-query';
    
    export default function useQueryPosts() {
      return useQuery(useQueryPosts.getKeys(), () => useQueryPosts.fetcher(), {
        staleTime: Infinity,
        retry: false,
      });
    }
    
    useQueryPosts.getKeys = () => [QUERY_KEYS.EXAMPLE_POSTS];
    useQueryPosts.fetcher = () => exampleApi.get<IPost[]>('/posts');
    ```
    
- [name].styles.ts
    
    `style` 지정을 위한 `emotion` 코드는 해당 파일에 위치합니다.
    
    ```tsx
    import { Font } from '@/shared/styles';
    
    import React from 'react';
    import styled from '@emotion/styled';
    
    export const PostContainer = styled.section<React.CSSProperties>`
      display: flex;
      flex-direction: column;
      border: 1px solid #ddd;
      border-radius: 20px;
      max-width: calc(50% - 10px);
    
      & > .title {
        padding: 20px;
        ${Font.title15}
        text-transform: capitalize;
        border-bottom: 1px solid #ddd;
        white-space: pre;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      & > .body {
        padding: 20px;
        ${Font.title15}
        text-transform: capitalize;
      }
    `;
    ```
    
- [name].tsx
    
    `JSX`를 리턴하는 컴포넌트 파일입니다.
    
    ```tsx
    import Post from '@/components/Post/Post';
    import { PostsContainer } from '@/components/Posts/Posts.constants';
    import React from 'react';
    import useQueryPosts from '@/components/Posts/Posts.hook';
    
    const Posts = () => {
      const { data, isFetching, isLoading, isError } = useQueryPosts();
    
      if (isLoading || isFetching) return <>loading</>;
      if (isError) return <>Error</>;
    
      return (
        <PostsContainer>
          {data.map((item) => (
            <Post key={item.id} title={item.title} body={item.body} id={item.id} userId={item.userId} />
          ))}
        </PostsContainer>
      );
    };
    
    export default Posts;
    ```
    

## aseets

<aside>
🧐 프로젝트 `assets` 집합

</aside>

```
assets
├── css
│   └── carousel.min.css
├── fonts
│   ├── AppleSDGothicNeo
│   │   └── AppleSDGothicNeoM.ttf
│   ├── Inter
│   │   └── Inter-SemiBold.ttf
│   └── NotoSansKR
│       └── NotoSansKR-Regular.otf
├── icon
│   ├── activeCheckbox.svg
├── images
│   └── CustomerInquiryBanner.png
├── locales
│      ├── en
│      │   └── common.json
│      └── ko
│           └── common.json
└── robots.txt
```

## pages

<aside>
🧐 프로젝트 `page` 집합

</aside>

### CSR **(CRA, vite, webpack)**

```
pages
├── voucher
│   └── index.tsx
└── index.tsx
```

<aside>
🧑‍💻 yarn prepare

명령어 입력 시 `src 디렉토리` 하위에 현재 `pages` 폴더를 기준으로 하여, 
`Routes.tsx` 파일을 자동으로 생성하여 아래와 같은 `path` 구조를 가집니다.

- /voucher/index
- /index
</aside>

### Next.js

```
pages
├── voucher
│   └── index.tsx
├── _app.tsx
├── _document.tsx
└── index.tsx
```

<aside>
🧑‍💻 `Next.js` 에서는 `pages 디렉토리` 구조를 따라 자동으로 `라우팅`을 지원합니다.

- /voucher/index
- /index
</aside>

## hooks

<aside>
🧐 프로젝트 `custom hooks` 들의 집합

</aside>

```
hooks
├── useDebounce.ts
├── useFetchPolicies.ts
├── useUnload.ts
└── useWindowSize.ts
```

## shared

<aside>
🧐 `shared` 폴더에는 프로젝트 내에서 전역으로 사용 되는 공용 파일 들이 위치합니다.

</aside>

```
shared
├── README.md
├── apis
│   ├── apiBase.ts
│   ├── exampleApi.ts
│   └── queryKeys
│       └── example.ts
├── configs
│   ├── queryClient.ts
│   ├── i18n.ts
│   └── storage.ts
├── constants
│   ├── common.constants.ts
│   └── pages
│       └── index.ts
├── lib
│   ├── functions
│   └── variables
├── styles
│   ├── pages
│   │   └── index.ts
│   ├── font.ts
│   ├── global.ts
│   ├── index.ts
│   └── media-query.ts
├── types
│   └── common.types.ts
└── utils
```

- `apis` : axios 기반의 비동기 통신 config 파일 및 react-query 에서 사용되는 query key 선언 파일들이 위치합니다.
- `configs` : react-query의 queryClient 및 각종 config 파일들이 위치합니다.
- `constants` : 전역 constant 선언들이 위치합니다.
- `types` : 전역 type 및 interface 등이 위치합니다.
- `lib` : 외부 및 내부 라이브러리 들이 위치합니다.
- `styles` : Emotion을 활용하여 전역적으로 사용 될 Style 코드가 위치합니다.
- `utils` : 각종 utils 들이 위치합니다.

## stores

<aside>
🧐 전역 상태관리를 위해 `Zustand`를 사용합니다.
`stores`폴더는 `zustand store` 관련 코드들이 위치합니다.

</aside>

```
stores
 └── useExampleStore.ts
```
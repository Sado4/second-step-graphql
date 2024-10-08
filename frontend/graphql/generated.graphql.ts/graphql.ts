/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type PostModel = {
  __typename?: 'PostModel';
  contentPath: Scalars['String']['output'];
  emoji?: Maybe<Scalars['String']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  publishDate?: Maybe<Scalars['DateTime']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  thumbNailUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  fixedPosts?: Maybe<Array<PostModel>>;
  hello: Scalars['Int']['output'];
  helloEnvDbUrl: Scalars['String']['output'];
  posts?: Maybe<Array<PostModel>>;
  prismaPosts?: Maybe<Array<PostModel>>;
};


export type QueryPostsArgs = {
  type?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PostFragment = { __typename?: 'PostModel', id: string, title: string, type: string, publishDate?: any | null } & { ' $fragmentName'?: 'PostFragment' };

export type PostIndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type PostIndexPageQuery = { __typename?: 'Query', articles?: Array<(
    { __typename?: 'PostModel' }
    & { ' $fragmentRefs'?: { 'PostFragment': PostFragment } }
  )> | null, diaries?: Array<(
    { __typename?: 'PostModel' }
    & { ' $fragmentRefs'?: { 'PostFragment': PostFragment } }
  )> | null };

export const PostFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostModel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}}]}}]} as unknown as DocumentNode<PostFragment, unknown>;
export const PostIndexPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostIndexPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"articles"},"name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"article","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Post"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"diaries"},"name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"diary","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Post"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostModel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}}]}}]} as unknown as DocumentNode<PostIndexPageQuery, PostIndexPageQueryVariables>;
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTopic = /* GraphQL */ `
  query GetTopic($id: ID!) {
    getTopic(id: $id) {
      id
      title
      comments {
        items {
          id
          topicId
          content
          createdAt
          updatedAt
          topicCommentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      commentTopicId
      owner
    }
  }
`;
export const listTopics = /* GraphQL */ `
  query ListTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        comments {
          nextToken
        }
        createdAt
        updatedAt
        commentTopicId
        owner
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      topicId
      content
      topic {
        items {
          id
          title
          createdAt
          updatedAt
          commentTopicId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      topicCommentsId
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        topicId
        content
        topic {
          nextToken
        }
        createdAt
        updatedAt
        topicCommentsId
        owner
      }
      nextToken
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic($owner: String) {
    onCreateTopic(owner: $owner) {
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
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic($owner: String) {
    onUpdateTopic(owner: $owner) {
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
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic($owner: String) {
    onDeleteTopic(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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

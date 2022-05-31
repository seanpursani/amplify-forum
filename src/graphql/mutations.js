/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
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
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
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
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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

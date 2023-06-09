# User Entity Modelling

The User Entity is a primary construct, where it gonna have all the necessary information to identify who the user is, how to give access to him and what him gonna access. Furthermore, this entity should support all the tecnologies where the related information gonna pass.

- **id**: primary key identifier, autoincremented, supports database technology
- **public_id**: unique identifier, UUID, identify an user by other means and supports queries
- **username**: unique identifier, VARCHAR(30), means a human readable identifier of an user, and make possible them to have access to application
- **password**: non-unique value, TEXT, it's the hashed version of password that identifies an user
- **avatar_uri**: unique identifier, TEXT, it's the filename of the avatar of some user. Defaults as "" (empty string)
- **full_name**: non-unique value, TEXT, it's the full name of the user.

## Related Types

```graphql
type BasicUserInfo {
    username: String!,
    fullname: String!
}

type Avatar {
    name: String!,
    // Image should be configured as Base64 scalar type
    img: Image!
}

type User implements Node {
    id: ID!,
    avatarUri: String!,
    // not a regular graphql schema syntax, but indicates that this type "extends" BasicUserInfo
    ...BasicUserInfo
}

type NewUser {
    password: String!,
    avatar: Avatar,
    ,,,BasicUserInfo
}

type EditUser {
    password: String,
    avatar: Avatar,
    ...BasicUserInfo
}
```

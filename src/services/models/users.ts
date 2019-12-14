export type users = {
  userTiny: UserTiny
  selfIntroduction: string
  followings: UserTiny[]
  followers: UserTiny[]
}

export type UserTiny = {
  uid: string
  name: string
  photoUrl: string
}

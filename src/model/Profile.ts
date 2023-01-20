class Profile {
  id: string;
  nickname: string;
  introduction: string;
  file: any;
  isFollowing: boolean;
  followerCount: number;
  followingCount: number;
  isBadge: boolean;
  badge: any;

  static createFromApi(data) {
    const profiles = new Profile();
    profiles.id = data.id;
    profiles.nickname = data.nickname;
    profiles.introduction = data.introduction;
    profiles.file = {
      profilePath: !!data.profile.thumbnail ? data.profile.thumbnail.path : null,
      profileCoverPath: !!data.profileCover ? data.profileCover.path : null
    };
    profiles.isFollowing = data.isFollowing;
    profiles.followerCount = data.followerCount;
    profiles.followingCount = data.followingCount;
    profiles.isBadge = !!data.badge;
    profiles.badge = {
      type: data.badge?.type.toLowerCase(),
      color: data.badge?.colorCode,
      imgURL: data.badge?.file.path
    }

    return profiles;
  }
}

export default Profile;
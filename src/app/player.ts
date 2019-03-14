
export class Player {
  tracked_until: string;
  solo_competitive_rank: number;
  competitive_rank: number;
  rank_tier: number;
  profile: {
    account_id: number;
    personaname: string;
    name: string;
    plus: boolean;
    cheese: number;
    steamid: string;
    avatar: string;
    avatarmedium: string;
    avatarfull: string;
    profileurl: string;
    last_login: string;
    loccountrycode: string;
    is_contributor: boolean};
  leaderboard_rank: number;
  mmr_estimate: {
    estimate: number;
  };
}

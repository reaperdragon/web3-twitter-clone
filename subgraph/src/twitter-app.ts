import { TweetCreated as TweetCreatedEvent } from './../generated/TwitterApp/TwitterApp';
import { Tweet } from '../generated/schema';

export function handleTweetCreated(event: TweetCreatedEvent): void {
  let tweet = new Tweet(event.params.id.toString());
  tweet.text = event.params.text;
  tweet.hash = event.params.hash;
  tweet.date = event.params.date;
  tweet.user = event.params.user;
  tweet.createdAt = event.block.timestamp;
  tweet.save();
}
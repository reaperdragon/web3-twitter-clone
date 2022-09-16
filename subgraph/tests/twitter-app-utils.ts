import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { TweetCreated } from "../generated/TwitterApp/TwitterApp"

export function createTweetCreatedEvent(
  id: BigInt,
  text: string,
  hash: string,
  date: string,
  user: Address
): TweetCreated {
  let tweetCreatedEvent = changetype<TweetCreated>(newMockEvent())

  tweetCreatedEvent.parameters = new Array()

  tweetCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  tweetCreatedEvent.parameters.push(
    new ethereum.EventParam("text", ethereum.Value.fromString(text))
  )
  tweetCreatedEvent.parameters.push(
    new ethereum.EventParam("hash", ethereum.Value.fromString(hash))
  )
  tweetCreatedEvent.parameters.push(
    new ethereum.EventParam("date", ethereum.Value.fromString(date))
  )
  tweetCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return tweetCreatedEvent
}

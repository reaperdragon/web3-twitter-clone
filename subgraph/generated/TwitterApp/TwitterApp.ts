// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class TweetCreated extends ethereum.Event {
  get params(): TweetCreated__Params {
    return new TweetCreated__Params(this);
  }
}

export class TweetCreated__Params {
  _event: TweetCreated;

  constructor(event: TweetCreated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get text(): string {
    return this._event.parameters[1].value.toString();
  }

  get hash(): string {
    return this._event.parameters[2].value.toString();
  }

  get date(): string {
    return this._event.parameters[3].value.toString();
  }

  get user(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class TwitterApp__getTweetResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get text(): string {
    return this[1].toString();
  }

  get hash(): string {
    return this[2].toString();
  }

  get date(): string {
    return this[3].toString();
  }

  get user(): Address {
    return this[4].toAddress();
  }
}

export class TwitterApp extends ethereum.SmartContract {
  static bind(address: Address): TwitterApp {
    return new TwitterApp("TwitterApp", address);
  }

  getTweet(_tweetId: BigInt): TwitterApp__getTweetResultValue0Struct {
    let result = super.call(
      "getTweet",
      "getTweet(uint256):((uint256,string,string,string,address))",
      [ethereum.Value.fromUnsignedBigInt(_tweetId)]
    );

    return changetype<TwitterApp__getTweetResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getTweet(
    _tweetId: BigInt
  ): ethereum.CallResult<TwitterApp__getTweetResultValue0Struct> {
    let result = super.tryCall(
      "getTweet",
      "getTweet(uint256):((uint256,string,string,string,address))",
      [ethereum.Value.fromUnsignedBigInt(_tweetId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<TwitterApp__getTweetResultValue0Struct>(value[0].toTuple())
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateTweetCall extends ethereum.Call {
  get inputs(): CreateTweetCall__Inputs {
    return new CreateTweetCall__Inputs(this);
  }

  get outputs(): CreateTweetCall__Outputs {
    return new CreateTweetCall__Outputs(this);
  }
}

export class CreateTweetCall__Inputs {
  _call: CreateTweetCall;

  constructor(call: CreateTweetCall) {
    this._call = call;
  }

  get _tweet_text(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _hash(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _date(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class CreateTweetCall__Outputs {
  _call: CreateTweetCall;

  constructor(call: CreateTweetCall) {
    this._call = call;
  }
}
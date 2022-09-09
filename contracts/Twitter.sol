// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TwitterApp {

    // Logging the event
    event TweetCreated(string msg);

    // Name of the App, owner address
    string private name;
    address private owner;

    // strcture of the tweet 
    struct Tweet {
        uint256 tweetId;
        string tweet_text;
        string  media;
        address user;
    }

     using Counters for Counters.Counter;
     Counters.Counter private _tweetIds;

    // mapping - id to Tweets 
    /*
            1 -> 1, Hello Tweeps!, photo or gif or no media, user
    */
     mapping(uint256 => Tweet) private idToTweets;

    constructor(string memory _name) {
        console.log("App Name is ",_name);
        name = _name;
        owner = msg.sender;
    }

    // create tweet
    function createTweet(string memory _tweet_text,string memory _hash) public {
        require(bytes(_tweet_text).length > 0, "No Tweet!");
        require(bytes(_hash).length > 0,"No Media");
        //increment by 1
        _tweetIds.increment();
        // current id
        uint256 tweetIdC = _tweetIds.current();
        Tweet storage tweet = idToTweets[tweetIdC];
        tweet.tweetId = tweetIdC;
        tweet.tweet_text = _tweet_text;
        tweet.media = _hash;
        tweet.user = msg.sender;

        emit TweetCreated("Tweet Created");
    }

    //get tweet
    function getTweet(uint256 _tweetId) public view returns (Tweet memory) {
        return idToTweets[_tweetId];
    }

}
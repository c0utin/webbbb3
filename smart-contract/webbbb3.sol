// SPDX-License-Identifier: MIT␍
pragma solidity ^0.8.21;␍
␍
struct Voting {␍
    string candidate1;␍
    uint votesForCadidate1;␍
    string candidate2;␍
    uint votesForCandidate2;␍
    uint maxDate;␍
}␍
␍
struct Vote {␍
    uint choice; // 1 or 2␍
    uint date;␍
}␍
␍
contract Webbb3{␍
    address owner;␍
    uint public currentVoting = 0;␍
    Voting[] public votings;␍
    mapping(uint => mapping(address => Vote)) public votes;␍
␍
␍
    constructor() {␍
        owner = msg.sender;␍
    }␍
␍
    function getCurrentVoting() public view returns (Voting memory) {␍
        return votings[currentVoting];␍
    }␍
␍
    function NewVoting(string memory candidate1, string memory candidate2, uint timeToVote) public {␍
        require(msg.sender == owner, "Invalid sender");␍
        ␍
        if(votings.length != 0) currentVoting++;␍
␍
        Voting memory newVoting;␍
        newVoting.candidate1 = candidate1;␍
        newVoting.candidate2 = candidate2;␍
        newVoting.maxDate = timeToVote + block.timestamp;␍
        votings.push(newVoting);␍
    }␍
␍
    function addVote(uint choice) public {␍
        require(choice == 1 || choice == 2, "Invalid Choice");␍
        require(getCurrentVoting().maxDate > block.timestamp, "No open voting");␍
        require(votes[currentVoting][msg.sender].date == 0, "You already voted on this voting");␍
␍
        votes[currentVoting][msg.sender].choice = choice;␍
        votes[currentVoting][msg.sender].date = block.timestamp;␍
␍
        if(choice == 1)␍
            votings[currentVoting].votesForCadidate1++;␍
        else ␍
        votings[currentVoting].votesForCandidate2++;␍
    }␍
}

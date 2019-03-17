import React from "react";
import Artist from "./ArtistContainer";
import ArtistBio from "./ArtistBio"
import MoneyRaised from "./MoneyRaised/MoneyRaised"
import {
  shallow
} from "enzyme"



//Need at least 1 test to pass Travis CI
describe("<ArtistContainer />", () => {

  const artistWrapper = shallow( < Artist / > )

  it('creates component without crashing', () => {
    const artist = < Artist / >
  })

  it("displays an artist bio", () => {
    expect(artistWrapper.find(ArtistBio).length).toEqual(1)
  })

  it("displays an money raised", () => {
    expect(artistWrapper.find(MoneyRaised).length).toEqual(1)
  })
});
class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date()
    console.log(startDate)
  }
  yearsExperienceFromBeginningOf(endDate){
    const date = new Date()
    return endDate - 1995
  }
}
class Route {
  constructor(horizontal, vertical){
    this.horizontal = horizontal
    this.vertical = vertical
  }
  blocksTravelled(blocks){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    return this.endingLocation - this.beginningLocation
  }
}

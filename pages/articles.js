import TimelineItem from "../components/shared/TimelineItem"

const Articles = (props) => {
  return(
    <div className="flex flex-col">
      <TimelineItem title="Article One">
        <p>
          I'm baby fingerstache kale chips helvetica food truck, shaman mustache stumptown readymade lomo small batch iceland. Hoodie adaptogen hot chicken health goth, helvetica man bun chambray typewriter gentrify flexitarian photo booth kickstarter. Kombucha la croix lyft viral cloud bread whatever meggings
        </p>
      </TimelineItem>
      
      <TimelineItem title="Article Two">
        <p>
          I'm baby fingerstache kale chips helvetica food truck, shaman mustache stumptown readymade lomo small batch iceland. Hoodie adaptogen hot chicken health goth, helvetica man bun chambray typewriter gentrify flexitarian photo booth kickstarter. Kombucha la croix lyft viral cloud bread whatever meggings
        </p>
      </TimelineItem>
    </div>
  )
}

export default Articles
import React from "react"
import SEO from "../components/seo"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import styled from "styled-components"

const TabsWrapper = styled.div`
  margin-bottom: 60px;
  ul,
  li {
    list-style: none;
  }
  ul {
    display: flex;
    margin: 0 0 30px;
    top: 58px;
    padding-top: 30px;
    position: sticky;
    background: #fff;
    border-bottom: 1px solid #eee;
  }
  li {
    font-family: "Sriracha", cursive;
    cursor: pointer;
    font-size: 18px;
    text-transform: uppercase;
    color: #666;
    transition: color 0.2s ease-in;
    &:hover {
      color: #444;
    }
    &.react-tabs__tab--selected {
      color: #10a472 !important;
    }
  }
  @media screen and (max-width: 900px) {
    ul {
      position: relative;
      padding-top: 0;
      top: 0;
    }
    li {
      font-size: 16px;
    }
  }
`

const PanelWrapper = styled.div`
  h2 {
    font-weight: 400;
    font-size: 22px;
    margin-bottom: 8px;
  }
  p {
    font-size: 15px;
    color: #777;
    margin-bottom: 40px;
  }
`

const Event = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #f4f4f4;
  .topic {
    font-weight: 600;
  }
  .speaker {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.7rem;
  }
  @media screen and (max-width: 500px) {
    display: block;
    .topic {
      font-size: 1.2rem;
      line-height: 1.5;
    }
    .time {
      font-size: 0.9rem;
      line-height: 1.4;
      margin-bottom: 12px;
    }
  }
`

const Divider = styled.span`
  padding: 0 32px;
  color: #bbb;
`

const Days = [
  {
    day: "Tuesday",
    data: [
      {
        time: "9 - 9:30 a.m.",
        talk: "Welcome Remarks",
        speaker: "",
      },
      {
        time: "9:30 - 10:30 a.m.",
        talk: "Data Mindfulness",
        speaker: "Sheetal Narvariya",
      },
      {
        time: "10:45 - 11:45 a.m.",
        talk: "Designing the Intersection of Government, Cancer and the People",
        speaker: "Kara DeFrias",
      },
      {
        time: "1:15 - 2:15 p.m.",
        talk: "Fireside Chat",
        speaker: "Diego Rodriguez",
      },
      {
        time: "2:30 - 5:45 p.m.",
        talk: "Accessibility Design Champions",
        speaker: "Ace Vu and Ted Drake",
      },
      {
        time: "6 - 8 p.m.",
        talk: "Design Week Social",
        speaker: "",
      },
    ],
  },
  {
    day: "Wednesday",
    data: [
      {
        time: "9 a.m. – 12:15 p.m.",
        talk: "Using Data to Tell Your Story",
        speaker: "Ben Blank and Justin Marr",
      },
      {
        time: "1:45 - 2:45 p.m.",
        talk: "Good Code, Bad Code",
        speaker: "Kelly Harrop",
      },
      {
        time: "3 - 4 p.m.",
        talk: "Doodle with Your Noodle",
        speaker: "Paul Goode",
      },
    ],
  },
  {
    day: "Thursday",
    data: [
      {
        time: "9 a.m. – 12 p.m.",
        talk: "We Care & Give Back",
        speaker: "ManeGait",
      },
      {
        time: "1:30 - 2:30 p.m.",
        talk: "Reflections on our Big Bets",
        speaker: "Panel discussion",
      },
      {
        time: "2:45 - 3:45 p.m.",
        talk: "2019 Design Awards",
        speaker: "",
      },
      {
        time: "3:45 - 4:15 p.m.",
        talk: "Closing Remarks",
        speaker: "",
      },
    ],
  },
]

const items = Days.map((item, index) => (
  <div key={index}>
    {item.data.map((c, i) => (
      <Event key={i}>
        <div className="time">{c.time}</div>
        <div className="talk">
          <div className="topic">{c.talk} </div>
          <div className="speaker">{c.speaker}</div>
        </div>
      </Event>
    ))}
  </div>
))

const Schedule = () => (
  <TabsWrapper>
    <Tabs>
      <TabList>
        <Tab>Tue, July 16</Tab>
        <Divider>•</Divider>
        <Tab>Wed, July 17</Tab>
        <Divider>•</Divider>
        <Tab>Thu, July 18</Tab>
      </TabList>
      <PanelWrapper>
        <TabPanel>
          <h2>Day 1: Plant seeds</h2>
          <p>
            Plant seeds of inspiration from emerging trends and industry experts
            that will help give you new perspectives on the experiences you
            create.
          </p>
          <div>{items[0]}</div>
        </TabPanel>
        <TabPanel>
          <h2>Day 2: Cultivate</h2>
          <p>
            Cultivate new skills that will help you approach your craft in a new
            way, develop your leadership abilities and produce better results.
          </p>
          <div>{items[1]}</div>
        </TabPanel>
        <TabPanel>
          <h2>Day 3: Harvest</h2>
          <p>
            Harvest the fruit of the past year, reflect on where we are as a
            company, recognize our achievements and share our prosperity with
            the community.
          </p>
          <div>{items[2]}</div>
        </TabPanel>
      </PanelWrapper>
    </Tabs>
  </TabsWrapper>
)

export default Schedule

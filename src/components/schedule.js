import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import styled from "styled-components"
import Collapsible from "react-collapsible"

const TabsWrapper = styled.div`
  margin-bottom: 60px;
  .react-tabs__tab {
    list-style: none;
  }
  .react-tabs__tab-list {
    display: flex;
    margin: 0 0 30px;
    top: 58px;
    padding-top: 30px;
    position: sticky;
    background: #fff;
    border-bottom: 1px solid #eee;
  }
  .react-tabs__tab {
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
  .description {
    font-size: 0.9rem;
    line-height: 1.7;
    color: #666;
  }
  @media screen and (max-width: 500px) {
    .react-tabs__tab-list {
      top: 42px;
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
  .day-description {
    font-size: 15px;
    color: #777;
    margin-bottom: 40px;
  }
  .Collapsible {
    .talk {
      cursor: pointer;
    }
    .talk:hover .topic {
      text-decoration: underline;
    }
    .topic {
      display: inline-block;
    }
    .description {
      margin-top: 20px;
    }
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
        description:
          "Discover the 8 sutras of data mindfulness and transform the way you and your team can visually communicate deep insights and weave stories that truly resonate in the hearts of your audience. You'll walk away from this inspirational session imparted with the wisdom to harness and utilize the power of data in your own work.",
      },
      {
        time: "10:45 - 11:45 a.m.",
        talk: "Designing the Intersection of Government, Cancer and the People",
        speaker: "Kara DeFrias",
        description:
          "In his 2016 State of the Union address, President Obama called on Vice President Biden to lead a new initiative called the Cancer Moonshot. Embracing a human-centered focus, the story of the Cancer Moonshot shows how even the most ambitious projects can proceed in a way that engages stakeholders and users throughout the design process. In this talk, you’ll learn how to use technology to help achieve the seemingly impossible — making a decade’s worth of advances in cancer prevention, diagnosis and treatment, in five years. Here’s the story of what it looks like to design at the intersection of a benevolent bureaucracy, a devastating disease and the humans in between.",
      },
      {
        time: "1:15 - 2:15 p.m.",
        talk: "Fireside Chat",
        speaker: "Diego Rodriguez and James Helms",
        description:
          "Get up close and personal with Intuit's Chief Product & Design Officer and the Strategic Partners Group's VP of Design. Take a visual journey of their design perspectives and ask them about everything you wanted to know about design and how it can help change your life.",
      },
      {
        time: "2:30 - 5:45 p.m.",
        talk: "WORKSHOP: Accessibility Design Champions",
        speaker: "Ace Vu and Ted Drake",
        description: (
          <div>
            <p>
              Make your commitment to building exceptional experiences for all
              our customers — regardless of physical, cognitive, mental and
              sensory abilities. Become an Intuit Accessibility Champion — and
              add that badge to your Insight profile.
            </p>

            <p>
              In this workshop, you'll understand the different types of
              accessibility, learn how to assess the accessibility of our
              products, start designing for disabled users and walk with a
              current customer through his experience.
            </p>
          </div>
        ),
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
        talk: "WORKSHOP: Using Data to Tell Your Story",
        speaker: "Ben Blank and J Marr",
        description:
          "Are you passionate about working smarter, not harder, improving your business acumen and developing new skills as a designer and product owner? We’re excited to announce a new workshop designed to teach you exactly that. You’ll learn new skills to get more customer-obsessed, create design experiments and make data-driven decisions to motivate your team to prioritize your ideas. Join this immersive workshop to teach these skills, exclusively for Design Week 2019.",
      },
      {
        time: "1:45 - 2:45 p.m.",
        talk: "WORKSHOP: Good Code, Bad Code",
        speaker: "Kelly Harrop",
        description:
          "In the epic fight between good and bad (code), it’s up to you to decide who’s victorious. Whether you’re a designer or developer, bad code affects us all. This workshop will arm you with a simple yet effective framework that can help teams align on creating awesome experiences for our customers.",
      },
      {
        time: "3 - 4 p.m.",
        talk: "WORKSHOP: Doodle with Your Noodle",
        speaker: "Paul Goode",
        description:
          "Get your noodle in gear as we dive into the world of visual thinking. We'll take a rapid tour through sketch-noting, frameworks, storytelling and collaboration. During this workshop, expect to learn how thinking and dreaming out loud can build tribes, shift environments, make the invisible visible and induce mind control! Whoa!",
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
        description:
          "Join us for a discussion with cross-functional leaders from across Intuit as we reflect on the past year, our performance against our big bets and our vision for the future.",
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
        {c.description ? (
          <Collapsible
            trigger={
              <div className="talk">
                <div className="topic trigger">{c.talk} </div>
                <div className="speaker">{c.speaker}</div>
              </div>
            }
            transitionTime={200}
            className="accordion"
          >
            <div className="description">{c.description}</div>
          </Collapsible>
        ) : (
          <div className="talk">
            <div className="topic">{c.talk} </div>
            <div className="speaker">{c.speaker}</div>
          </div>
        )}
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
          <p className="day-description">
            Plant seeds of inspiration from emerging trends and industry experts
            that will help give you new perspectives on the experiences you
            create.
          </p>
          <div>{items[0]}</div>
        </TabPanel>
        <TabPanel>
          <h2>Day 2: Cultivate</h2>
          <p className="day-description">
            Cultivate new skills that will help you approach your craft in a new
            way, develop your leadership abilities and produce better results.
          </p>
          <div>{items[1]}</div>
        </TabPanel>
        <TabPanel>
          <h2>Day 3: Harvest</h2>
          <p className="day-description">
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

import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import styled from "styled-components"

const TabsWrapper = styled.div`
  margin-bottom: 100px;
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
  }
`

const Placeholder = styled.div`
  background-color: #eee;
  font-family: "Sriracha", cursive;
  border-radius: 4px;
  margin: 0 0 60px;
  padding: 16em 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  .align-center {
    text-align: center;
    font-size: 1em;
    color: #999;
    margin: 20px 0;
  }
`

const Divider = styled.span`
  padding: 0 32px;
  color: #bbb;
`

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
          <Placeholder>
            <p className="align-center">
              <span role="img" aria-label="sprout">
                🌱
              </span>
              <br />
              Schedule coming soon!
            </p>
          </Placeholder>
        </TabPanel>
        <TabPanel>
          <h2>Day 2: Cultivate</h2>
          <p>
            Cultivate new skills that will help you approach your craft in a new
            way, develop your leadership abilities and produce better results.
          </p>
          <Placeholder>
            <p className="align-center">
              <span role="img" aria-label="tree">
                🌳
              </span>
              <br />
              Schedule coming soon!
            </p>
          </Placeholder>
        </TabPanel>
        <TabPanel>
          <h2>Day 3: Harvest</h2>
          <p>
            Harvest the fruit of the past year, reflect on where we are as a
            company, recognize our achievements and share our prosperity with
            the community.
          </p>
          <Placeholder>
            <p className="align-center">
              <span role="img" aria-label="apple">
                🍎
              </span>
              <br />
              Schedule coming soon!
            </p>
          </Placeholder>
        </TabPanel>
      </PanelWrapper>
    </Tabs>
  </TabsWrapper>
)

export default Schedule

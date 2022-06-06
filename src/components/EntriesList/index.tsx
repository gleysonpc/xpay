import React, {useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import {Text, TouchableOpacity, View} from 'react-native';
import DropShadow from '@components/DropShadow';
import Icon from 'react-native-vector-icons/Feather';
import {
  AccordionContent,
  AccordionContentCard,
  AccordionHeader,
  Circle,
} from './styles';

interface Earning {
  id: string;
  description: string;
  total: number;
}
interface Section {
  title: string;
  content: Earning[];
  active: boolean;
}

interface EntriesListProps {
  data: any;
}

function renderHeader(section: Section) {
  return (
    <DropShadow>
      <AccordionHeader>
        <Text>{section.title} </Text>
        <Icon
          name={section.active ? 'chevron-up' : 'chevron-down'}
          color={'red'}
          size={25}
        />
      </AccordionHeader>
    </DropShadow>
  );
}

function renderContent(section: Section) {
  return (
    <View>
      {section.content.map(earning => (
        <AccordionContent key={earning.id}>
          <Circle />
          <DropShadow>
            <AccordionContentCard>
              <Text>{earning.description}</Text>
              <Text>{earning.total}</Text>
            </AccordionContentCard>
          </DropShadow>
        </AccordionContent>
      ))}
    </View>
  );
}

export function EntriesList({data}: EntriesListProps) {
  const [activeSections, setActiveSections] = useState<number[]>([0]);

  function updateSections(activeSectionsValues: number[]) {
    setActiveSections(activeSectionsValues);
  }
  return (
    <Accordion
      sections={data.map((item: any, index: number) => ({
        title: item.description,
        content: item.earnings,
        active: index === activeSections[0],
      }))}
      activeSections={activeSections}
      renderHeader={renderHeader}
      renderContent={renderContent}
      onChange={updateSections}
      touchableComponent={TouchableOpacity}
      renderAsFlatList
    />
  );
}

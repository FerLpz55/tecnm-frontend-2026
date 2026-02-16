import { Component } from '@angular/core';
import { Text } from '../../atoms/text/text';
import { Title } from '../../atoms/title/title';
import { LabeledText } from '../../atoms/labeled-text/labeled-text';
import { Intersectable } from '../../directives/intersectable/intersectable';

@Component({
  selector: 'hack-itinerary',
  imports: [Title, Text, LabeledText, Intersectable],
  templateUrl: './itinerary.page.html',
  styleUrl: './itinerary.page.css',
})
export class ItineraryPage { }

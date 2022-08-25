import { Component, OnInit } from '@angular/core';
import {
  ChatClientService,
  ChannelService,
  StreamI18nService,
} from 'stream-chat-angular';
import dockerNames = require('docker-names');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  levels = [
    'No customization',
    'Global theme variables',
    'Component theme variables',
    'Custom CSS code',
  ];
  selectedLevelIndex = 0;
  constructor(
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService
  ) {
    this.streamI18nService.setTranslation();
  }

  async ngOnInit() {
    const apiKey = 'dz5f4d5kzrue';
    const userId = dockerNames.getRandomName();
    await this.chatService.init(apiKey, userId, 'guest');
    this.channelService.init({
      type: 'messaging',
      id: { $eq: 'talking-about-angular' },
    });
  }
}

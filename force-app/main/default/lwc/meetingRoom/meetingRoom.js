import {LightningElement, api } from 'lwc';

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo = { roomName : 'A1', roomCapacity :'14'};
}
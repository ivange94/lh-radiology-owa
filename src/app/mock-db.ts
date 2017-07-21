import {Order} from "./models/order";

export var orders: Order[] = [
  {
    uuid: '1b0c7f94-30d0-4256-abdd-b027adf89a5d',
    orderNumber: 'ORD-1',
    accessionNumber: 1,
    action: '',
    dateActivated: new Date(),
    dateStopped: new Date(),
    autoExpireDate: null,
    orderReasonNonCoded: 'Testing',
    urgency: 'Routine',
    scheduledDate: null,
    instructions: '',
    commentToFulfiller: '',
    display: ''
  },
  {
    uuid: 'de71d763-95ba-4bf1-a95d-0fb4db09850a',
    orderNumber: 'ORD-2',
    accessionNumber: 2,
    action: '',
    dateActivated: new Date(),
    dateStopped: new Date(),
    autoExpireDate: null,
    orderReasonNonCoded: 'Pain in leg',
    urgency: 'Routine',
    scheduledDate: null,
    instructions: '',
    commentToFulfiller: '',
    display: ''
  },
  {
    uuid: '76725697-d8e6-4e9b-9d38-d49a3e6b40da',
    orderNumber: 'ORD-3',
    accessionNumber: 3,
    action: '',
    dateActivated: new Date(),
    dateStopped: new Date(),
    autoExpireDate: null,
    orderReasonNonCoded: 'Pain in leg',
    urgency: 'Routine',
    scheduledDate: null,
    instructions: '',
    commentToFulfiller: '',
    display: ''
  }

]

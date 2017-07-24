import {Order} from "./models/order";
import {Report} from "./models/report";
import {User} from "./models/user";
import {Patient} from "./models/patient";

const order1: Order = {
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
  display: 1 + ' - X-RAY'
};

const order2 = {
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
  display: 2 + ' - X-RAY'
};

const order3 = {
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
  display: 3 + ' - X-RAY'
};

export var orders: Order[] = [
  order1,
  order2,
  order3
];

export var reports: Report[] = [
  {
    uuid: '121e160b-d146-4fde-8e2d-34ba0b343fa1',
    radiologyOrder: order1,
    date: new Date(),
    principalResultsInterpreter: new User(),
    status: 'Completed',
    body: '<h1>Hello World</h1>',
    display: '',
    void: false
  },
  {
    uuid: '9ccfd2f0-9aee-4ff1-b07c-575b80757e64',
    radiologyOrder: order2,
    date: new Date(),
    principalResultsInterpreter: new User(),
    status: 'Completed',
    body: '<h1>Another report</h1>',
    display: '',
    void: false
  },
  {
    uuid: 'f3d28c45-a383-4164-aa87-668baaad5bba',
    radiologyOrder: order3,
    date: new Date(),
    principalResultsInterpreter: new User(),
    status: 'Draft',
    body: '<h1>Broken bones</h1>',
    display: '',
    void: false
  }
];

export var users: User[] = [

];

export var patients: Patient[] = [

];





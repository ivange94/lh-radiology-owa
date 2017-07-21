export class Order {

  uuid: string;
  orderNumber: string;
  accessionNumber: number;
  action: string;
  dateActivated: Date;
  dateStopped: Date;
  autoExpireDate: Date;
  orderReasonNonCoded: string;
  urgency: string;
  scheduledDate: Date;
  instructions: string;
  commentToFulfiller: string;
  display: string;
}

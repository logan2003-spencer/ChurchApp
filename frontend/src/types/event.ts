export interface Event {
    eventId: number;
    isAttendance: boolean;
    eventName: string;
    eventDesc: string;
    eventAddress: string;
    eventStart: string;
    eventEnd: string;
    eventTypeId: number | null;
    unitId: number;
    organizationId: number;
    eventType: any | null;
    organization: any | null;
    signUps: any[];
    unit: any | null;
}
export class Department {
    details: string;
    name: string;
    id: number;
}

export class Position {
    details: string;
    name: string;
    id: number;
}


export class Employee {
    department: Department;
    position: Position;
    firstName: string;
    lastName: string;
    patronymic: string;
    photoUrl: string;
    dateOfBirth: Date;
    name: string;
    id: number;
}


export class GetListResponse<T> {
    items: T[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
}

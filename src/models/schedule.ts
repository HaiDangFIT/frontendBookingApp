interface Rating {
  star: number;
  postedBy: string;
  comment: string;
  updatedAt: string;
  _id: string;
}

interface Clinic {
  descriptionImg: string[];
  _id: string;
  name: string;
  ratings: Rating[];
  totalRatings: number;
  description: string;
}

interface TimeType {
  full: boolean;
  time: string;
  maxNumber: number;
}

export interface Schedule {
  _id: string;
  doctorID: {
    totalRatings: number;
    _id: string;
    clinicID: Clinic;
    description: string;
    specialtyID: {
      _id: string;
      name: string;
      __v: number;
    };
    position: string;
    ratings: Rating[];
  };
  cost: number;
  date: string;
  timeType: TimeType[];
  __v: number;
}

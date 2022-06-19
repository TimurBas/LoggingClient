type LogModel = {
  level: string;
  message: string;
  exception: Exception;
  createdOn: Date;
};

type Exception = {
  message: string;
  stacktrace: string;
};

export type { LogModel };

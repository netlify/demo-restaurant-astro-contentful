import { DateTime } from "luxon";

const formatDate = (date) => {
    const dt = DateTime.fromISO(date);
    return dt.toLocaleString();
}

export { formatDate };
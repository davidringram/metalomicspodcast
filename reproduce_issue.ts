
import { object, number, parse, string, array, optional, union } from 'valibot';

function parseDuration(duration: number | string): number {
  if (typeof duration === 'number') {
    return duration;
  }

  const parts = duration.split(':').map(Number);
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  }
  return 0;
}

const FeedSchema = object({
    items: array(
      object({
        itunes_duration: union([number(), string()]),
      })
    )
  });

const failingData = {
    items: [
        {
            itunes_duration: "00:55:00"
        }
    ]
};

try {
    const result = parse(FeedSchema, failingData);
    console.log("Validation passed as expected!");
    const duration = parseDuration(result.items[0].itunes_duration);
    console.log(`Parsed duration: ${duration} seconds (Expected: 3300)`);
} catch (error) {
    console.log("Validation failed unexpectedly:", (error as Error).message);
}

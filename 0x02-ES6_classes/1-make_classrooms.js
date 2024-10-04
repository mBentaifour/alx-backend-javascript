import ClassRoom from './0-classroom';

/**
 * Creates array of {@link ClassRoom}
 * @returns array of {@link ClassRoom}s
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}

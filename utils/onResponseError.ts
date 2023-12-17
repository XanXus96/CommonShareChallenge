export default function (context: any) {
  throw (context.response as { error?: any }).error;
}

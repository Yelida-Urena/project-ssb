<?php

$fecha="2022-";

$link = '../../../../assets/GoogleDrive/*' . $fecha . '*';

// print_r($search_results);
// $data [] = glob('../../../../assets/GoogleDrive/*' . $fecha . '*');
$data [] = glob('..\..\..\..\assets\GoogleDrive\1001-1\*' . $fecha . '*');



// foreach (glob("*.jpg") as $filename) {
//     echo "$filename size " . filesize($filename) . "\n";
//     $data [] = implode(" ", $filename);

// }

echo json_encode([
  'data' => $data,
  'links' => $link
]);
?>

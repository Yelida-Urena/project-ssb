import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { PhotoService } from 'src/app/servicio/photo.service';

@Component({
  selector: 'app-imagen-boya',
  templateUrl: './imagen-boya.component.html',
  styleUrls: ['./imagen-boya.component.css']
})
export class ImagenBoyaComponent implements OnInit{

  albums:any = [];
  albumsSplit:any = [];
  albumsString:any = [];
  fecha:any;
  fechaString: any;

  constructor(
    private _lightbox: Lightbox,
    private photo: PhotoService
  ) {

  }

  ngOnInit(): void {

    this.fecha = "2022"

    this.fechaString = "*" + this.fecha + "*";

    this.photo.getPhotos(this.fecha).subscribe((data1:any) => {
      console.log(data1);
      this.albums = data1.data;
    });

   this.toStringAlbum(this.albums);

  }

  toStringAlbum(albums:any){

    this.albumsString = this.albums;
    // this.albumsSplit = this.albums.split("\\.");
    console.log(this.albumsString);


  }

}


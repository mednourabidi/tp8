import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ParkService } from '../../services/park-service';
import { Park } from '../../models/park';

@Component({
  selector: 'app-park-list',
  imports: [RouterLink],
  templateUrl: './park-list.html',
  styleUrl: './park-list.css'
})
export class ParkList implements OnInit {
  private readonly parkService = inject(ParkService);
  private readonly router = inject(Router);
  parks = this.parkService.parks;

  ngOnInit(): void {
    this.parkService.getParks().subscribe();
  }

  onLike(p: Park) {
    this.parkService.updatePark({ ...p, nbLikes: p.nbLikes + 1 }).subscribe();
  }

  onDelete(id: string) {
    this.parkService.deletePark(id).subscribe();
  }
}
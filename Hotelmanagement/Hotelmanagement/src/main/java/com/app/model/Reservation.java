package com.app.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Reservation {

	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int reservationID;
	    private int roomID;
	    private String roomType;
	    private String fromDate;
	    private String toDate;
	    
		public Reservation() {
			super();
			// TODO Auto-generated constructor stub
		}

		public Reservation(int reservationID, int roomID, String roomType, String fromDate, String toDate) {
			super();
			this.reservationID = reservationID;
			this.roomID = roomID;
			this.roomType = roomType;
			this.fromDate = fromDate;
			this.toDate = toDate;
		}

		public int getReservationID() {
			return reservationID;
		}

		public void setReservationID(int reservationID) {
			this.reservationID = reservationID;
		}

		public int getRoomID() {
			return roomID;
		}

		public void setRoomID(int roomID) {
			this.roomID = roomID;
		}

		public String getRoomType() {
			return roomType;
		}

		public void setRoomType(String roomType) {
			this.roomType = roomType;
		}

		public String getFromDate() {
			return fromDate;
		}

		public void setFromDate(String fromDate) {
			this.fromDate = fromDate;
		}

		public String getToDate() {
			return toDate;
		}

		public void setToDate(String toDate) {
			this.toDate = toDate;
		}
		
		
	    
	    
}
